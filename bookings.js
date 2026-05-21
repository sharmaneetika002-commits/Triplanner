// bookingPopup == the actual layout box that shows on the page after clicking the card 
// injectModalStyles == adds CSS styles dynamically for the popup
// updateBreakdown == recalculates and updates the displayed passenger + total price info
// // openFlightModal == actual function that opens the popup 



//this means when the event of loading of the dom content is done we perform the next function
document.addEventListener('DOMContentLoaded', () => {
  // Grab price and duration text from each card
  document.querySelectorAll('.booking-card').forEach(card => {
    //this makes mouse become a pointer when it is hovering over a card 
    card.style.cursor = 'pointer';
    //when card is clicked we create two variables containin duration and price of the flight
    card.addEventListener('click', () => {
      const priceText = card.querySelector('h3').textContent;        // e.g. "₹94,799+"
      const flightDuration   = card.querySelector('p:last-of-type').textContent; // e.g. "11h to Tokyo"
      // Strip ₹, commas, making the price into a regular string and then we convert it into a number 
      const basePrice = parseInt(priceText.replace(/[₹,+]/g, ''), 10);

      finalPrice(basePrice, flightDuration, priceText);
    });
  });
  //this is function calling, before the function is declared
  bookingPopup();
});

//Build the modal HTML once 
function bookingPopup() {
  const popup = document.createElement('div');
  popup.id = 'paxpopup';
  popup.innerHTML = `
    <div id="paxModal">
      <div class="pax-modal-header">
        <div>
          <p class="pax-modal-label">Booking Flight</p>
          <h3 id="paxFlightInfo">11h to Tokyo</h3>
        </div>
        <button id="paxClose" aria-label="Close">✕</button>
      </div>

      <div class="pax-price-base">
        Base fare: <span id="paxBasePrice">₹0</span> per person
      </div>

      <div class="pax-row">
        <span class="pax-label">✈️ Passengers</span>
        <div class="pax-controls">
          <button class="pax-btn" id="paxMinus">−</button>
          <span id="passengerCount">1</span>
          <button class="pax-btn" id="paxPlus">+</button>
        </div>
      </div>

      <div class="pax-breakdown">
        <div class="pax-breakdown-row">
          <span id="passengerCalculation">₹0 × 1 passenger</span>
          <span id="PassengerTotalPrice">₹0</span>
        </div>
      </div>

      <p class="pax-note">This will be added as a Flight expense in your Trip Budget.</p>

      <div class="pax-actions">
        <button id="paxCancel">Cancel</button>
        <button id="paxConfirm">Add to Budget →</button>
      </div>

      <div id="paxSuccess" style="display:none;">
        <span>✅</span> Flight expense saved! Open your <strong>Trip Budget</strong> page to see it.
      </div>
    </div>
  `;
  //this is to show the whole above code block onto the webpage
  document.body.appendChild(popup);
  injectModalStyles();

  // State
  let currentBase = 0;
  let passengers  = 1;

  function updateBreakdown() {
    const total = currentBase * passengers;
    document.getElementById('passengerCount').textContent   = passengers;
    //in this line we used a constant named fmt (that we declare later) where we take the number and convert it to indian currency
    document.getElementById('passengerCalculation').textContent    = `${fmt(currentBase)} × ${passengers} passenger${passengers > 1 ? 's' : ''}`;
    document.getElementById('PassengerTotalPrice').textContent   = fmt(total);
  }

  // Events
  document.getElementById('paxMinus').addEventListener('click', () => {
    if (passengers > 1) { passengers--; updateBreakdown(); }
  });
  document.getElementById('paxPlus').addEventListener('click', () => {
    if (passengers < 20) { passengers++; updateBreakdown(); }
  });

  //these lines basically closes the popup
  document.getElementById('paxClose').addEventListener('click',  closeModal);
  document.getElementById('paxCancel').addEventListener('click', closeModal);
  //this is if the user clicks anywhere but the popup it closes
  popup.addEventListener('click', e => { if (e.target === popup) closeModal(); });

  document.getElementById('paxConfirm').addEventListener('click', () => {
    const total      = currentBase * passengers;
    const flightInfo = document.getElementById('paxFlightInfo').textContent;

    // Save to localStorage so budget.js picks it up, basically in pending variable we are storing the local storage item of the flight details and parsing it to convert it to a object
    // Then we are adding stuff to the pending variable using bush and stringfifying it again because local storage ONLY STORES STRINGS
    const pending = JSON.parse(localStorage.getItem('pendingFlightExpenses') || '[]');
    pending.push({
      name:   `Flight — ${flightInfo}`,
      amount: total,
      cat:    'Flight'
    });
    localStorage.setItem('pendingFlightExpenses', JSON.stringify(pending));

    // Show success message
    document.getElementById('paxSuccess').style.display = 'block';
    document.getElementById('paxConfirm').disabled = true;
    document.getElementById('paxConfirm').textContent = 'Saved ✓';
    // Auto-close after 2.5 s
    setTimeout(closeModal, 2500);
  });

  // Expose open so card clicks can call it
  //window creates a globally accessible function so openFlightModal is a global function 
  window._openFlightModal = function(basePrice, flightDuration) {
    passengers  = 1;
    currentBase = basePrice;
    document.getElementById('paxFlightInfo').textContent = flightDuration;
    document.getElementById('paxBasePrice').textContent  = fmt(basePrice);
    document.getElementById('paxSuccess').style.display  = 'none';
    document.getElementById('paxConfirm').disabled       = false;
    document.getElementById('paxConfirm').textContent    = 'Add to Budget →';
    updateBreakdown();
    popup.classList.add('open');
    //this disables background scrolling when popup is open
    document.body.style.overflow = 'hidden';
  };
}

function finalPrice(basePrice, flightDuration) {
  window._openFlightModal(basePrice, flightDuration);
}

function closeModal() {
  document.getElementById('paxpopup').classList.remove('open');
  document.body.style.overflow = '';
}

const fmt = n => '₹' + n.toLocaleString('en-IN');


// Modal styles
function injectModalStyles() {
  const style = document.createElement('style');
  style.textContent = `
    #paxpopup {
      display: none;
      position: fixed; inset: 0;
      background: rgba(0,0,0,0.5);
      z-index: 9999;
      align-items: center;
      justify-content: center;
    }
    #paxpopup.open { display: flex; }

    #paxModal {
      background: #fff;
      border-radius: 20px;
      padding: 28px 28px 24px;
      width: min(400px, 92vw);
      box-shadow: 0 20px 60px rgba(0,0,0,0.18);
      font-family: inherit;
    }

    .pax-modal-header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      margin-bottom: 16px;
    }
    .pax-modal-label {
      font-size: 12px;
      color: #888;
      margin: 0 0 2px;
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }
    .pax-modal-header h3 {
      font-size: 18px;
      font-weight: 600;
      margin: 0;
      color: #1a1a1a;
    }
    #paxClose {
      background: none; border: none;
      font-size: 18px; cursor: pointer;
      color: #999; line-height: 1;
      padding: 0;
    }
    #paxClose:hover { color: #333; }

    .pax-price-base {
      font-size: 13px;
      color: #666;
      background: #f7f7f5;
      border-radius: 10px;
      padding: 10px 14px;
      margin-bottom: 20px;
    }
    .pax-price-base span { font-weight: 600; color: #1a1a1a; }

    .pax-row {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 18px;
    }
    .pax-label { font-size: 15px; font-weight: 500; color: #1a1a1a; }
    .pax-controls { display: flex; align-items: center; gap: 14px; }
    .pax-btn {
      width: 36px; height: 36px;
      border-radius: 50%;
      border: 1.5px solid #ddd;
      background: #fff;
      font-size: 20px;
      cursor: pointer;
      display: flex; align-items: center; justify-content: center;
      color: #333;
      transition: background 0.15s, border-color 0.15s;
    }
    .pax-btn:hover { background: #f0f0f0; border-color: #bbb; }
    #passengerCount {
      font-size: 22px;
      font-weight: 600;
      min-width: 32px;
      text-align: center;
      color: #1a1a1a;
    }

    .pax-breakdown {
      background: #f7f7f5;
      border-radius: 12px;
      padding: 14px 16px;
      margin-bottom: 14px;
    }
    .pax-breakdown-row {
      display: flex;
      justify-content: space-between;
      font-size: 15px;
    }
    #passengerCalculation { color: #555; }
    #PassengerTotalPrice { font-weight: 700; font-size: 17px; color: #1a1a1a; }

    .pax-note {
      font-size: 12px;
      color: #999;
      margin: 0 0 20px;
      line-height: 1.5;
    }

    .pax-actions { display: flex; gap: 10px; }
    .pax-actions button {
      flex: 1;
      padding: 13px;
      border-radius: 12px;
      font-size: 14px;
      font-weight: 600;
      cursor: pointer;
      border: none;
      transition: opacity 0.15s, transform 0.1s;
    }
    .pax-actions button:active { transform: scale(0.97); }
    #paxCancel  { background: #f0f0f0; color: #555; }
    #paxCancel:hover { background: #e5e5e5; }
    #paxConfirm { background: #1a1a1a; color: #fff; }
    #paxConfirm:hover:not(:disabled) { background: #333; }
    #paxConfirm:disabled { opacity: 0.6; cursor: default; }

    #paxSuccess {
      margin-top: 14px;
      background: #edfbf3;
      border-radius: 10px;
      padding: 12px 14px;
      font-size: 13px;
      color: #1a7a4a;
      text-align: center;
    }
  `;
  document.head.appendChild(style);
}