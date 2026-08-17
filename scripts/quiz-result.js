/*
 * LoveStyles quiz — client-side scoring.
 *
 * Ported from the original doctor/_quizresults.asp (Classic ASP) tally logic.
 * That script POSTed to the server, tallied radio answers q1..q10 into four
 * categories (lion/bear/bee/otter), and redirected to
 * /doctor/default.asp?if=<animal>.html. Those destination pages (lion.html,
 * bear.html, bee.html, otter.html) never existed anywhere in the original
 * site export, so the redirect was already dead in production. Rather than
 * reimplement a redirect to a page that doesn't exist, this shows the result
 * inline on the same page.
 */
(function () {
  "use strict";

  var CATEGORIES = {
    1: { key: "lion", label: "Lion" },
    2: { key: "bear", label: "Bear" },
    3: { key: "bee", label: "Bee" },
    4: { key: "otter", label: "Otter" }
  };

  var DESCRIPTIONS = {
    lion: "Take-charge and confident, Lions initiate, lead, and know what they want — in and out of the bedroom.",
    bear: "Warm and steady, Bears value closeness, cooperation, and being there for their partner.",
    bee: "Organized and dependable, Bees like structure and take a systematic, dedicated approach to love.",
    otter: "Playful and spontaneous, Otters bring fun, creativity, and variety to the relationship."
  };

  function tally(form) {
    var counts = { lion: 0, bear: 0, bee: 0, otter: 0 };
    var order = ["lion", "bear", "bee", "otter"];
    var answered = 0;

    for (var i = 1; i <= 10; i++) {
      var field = form.elements["q" + i];
      if (!field) continue;
      var value = null;
      if (field.length) {
        for (var j = 0; j < field.length; j++) {
          if (field[j].checked) {
            value = field[j].value;
            break;
          }
        }
      } else if (field.checked) {
        value = field.value;
      }
      if (value) {
        var cat = CATEGORIES[value];
        if (cat) {
          counts[cat.key]++;
          answered++;
        }
      }
    }

    if (answered === 0) {
      return null;
    }

    // Ties resolve in lion, bear, bee, otter order (matches the original
    // ASP's select/case fallthrough order).
    var winner = order[0];
    for (var k = 0; k < order.length; k++) {
      if (counts[order[k]] > counts[winner]) {
        winner = order[k];
      }
    }
    return winner;
  }

  function showResult(form, key) {
    var panel = document.getElementById("quiz-result-panel");
    if (!panel) {
      panel = document.createElement("div");
      panel.id = "quiz-result-panel";
      panel.style.border = "2px solid #999";
      panel.style.background = "#fff8e7";
      panel.style.padding = "16px 20px";
      panel.style.margin = "16px 0";
      panel.style.maxWidth = "500px";
      form.parentNode.insertBefore(panel, form.nextSibling);
    }

    if (!key) {
      panel.innerHTML =
        "<p><strong>Please answer at least one question</strong> to see your LoveStyles result.</p>";
      panel.style.display = "block";
      return;
    }

    var label = CATEGORIES[
      { lion: 1, bear: 2, bee: 3, otter: 4 }[key]
    ].label;
    panel.innerHTML =
      "<p><strong>You're a " + label + "!</strong></p><p>" + DESCRIPTIONS[key] + "</p>";
    panel.style.display = "block";
    panel.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }

  function init() {
    var form = document.querySelector('form[name="quiz"]') || document.getElementById("quiz-form");
    if (!form) return;

    form.addEventListener("submit", function (evt) {
      evt.preventDefault();
      var winner = tally(form);
      showResult(form, winner);
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
