// Allergic to Hourly® AI Systems Starter Kit — checkout logic
(function () {
  var BASE = 27;        // main product price
  var BUMP1 = 17;       // Charge More Without the Cringe
  var BUMP2 = 19;       // Your Business by Design

  function money(n) { return "$" + n.toFixed(0); }

  function recalc() {
    var b1 = document.getElementById("bump1");
    var b2 = document.getElementById("bump2");
    var total = BASE;
    if (b1 && b1.checked) total += BUMP1;
    if (b2 && b2.checked) total += BUMP2;

    var b1line = document.getElementById("line-bump1");
    var b2line = document.getElementById("line-bump2");
    if (b1line) b1line.style.display = (b1 && b1.checked) ? "flex" : "none";
    if (b2line) b2line.style.display = (b2 && b2.checked) ? "flex" : "none";

    var totalEl = document.getElementById("total");
    if (totalEl) totalEl.textContent = money(total);

    var btn = document.getElementById("pay-btn");
    if (btn) btn.textContent = "Connect Checkout Link Here · " + money(total);
  }

  document.addEventListener("DOMContentLoaded", function () {
    var b1 = document.getElementById("bump1");
    var b2 = document.getElementById("bump2");
    if (b1) b1.addEventListener("change", recalc);
    if (b2) b2.addEventListener("change", recalc);
    recalc();

    // Placeholder checkout -> go to upsell (simulates post-purchase flow)
    var btn = document.getElementById("pay-btn");
    if (btn) {
      btn.addEventListener("click", function (e) {
        e.preventDefault();
        // TODO: replace with real Stripe/GHL/Thrivecart checkout.
        window.location.href = "upsell.html";
      });
    }
  });
})();
