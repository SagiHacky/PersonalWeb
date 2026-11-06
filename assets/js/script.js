function myFunction() {
  var element = document.body;
  var isWhiteMode = element.classList.toggle("white-mode");
  var button = document.querySelector(".theme-toggle");

  if (button) {
    button.textContent = isWhiteMode ? "Tmavý režim" : "Světlý režim";
  }

  localStorage.setItem("theme", isWhiteMode ? "white" : "dark");
}

function updateArticleDates() {
  const dateFormatter = new Intl.DateTimeFormat("cs-CZ", {
    day: "numeric",
    month: "long",
    year: "numeric"
  });
  const relativeFormatter = new Intl.RelativeTimeFormat("cs-CZ", { numeric: "auto" });
  const today = new Date();

  document.querySelectorAll("[data-publication-date]").forEach((time) => {
    const published = new Date(`${time.dateTime}T00:00:00`);
    if (Number.isNaN(published.getTime())) return;

    time.textContent = dateFormatter.format(published);

    const age = time.closest(".article-meta").querySelector("[data-article-age]");
    if (!age) return;

    let months = (today.getFullYear() - published.getFullYear()) * 12;
    months += today.getMonth() - published.getMonth();
    if (today.getDate() < published.getDate()) months -= 1;

    if (months === 0) {
      const todayUtc = Date.UTC(today.getFullYear(), today.getMonth(), today.getDate());
      const publishedUtc = Date.UTC(published.getFullYear(), published.getMonth(), published.getDate());
      const days = Math.round((todayUtc - publishedUtc) / 86400000);
      age.textContent = relativeFormatter.format(-days, "day");
    } else {
      age.textContent = relativeFormatter.format(-months, "month");
    }
  });
}

document.addEventListener("DOMContentLoaded", function () {
  var body = document.body;
  var button = document.querySelector(".theme-toggle");

  if (localStorage.getItem("theme") !== "dark") {
    body.classList.add("white-mode");
  }

  if (button) {
    button.textContent = body.classList.contains("white-mode") ? "Tmavý režim" : "Světlý režim";
  }

  var pgpDialog = document.getElementById("pgp-help");
  var pgpHelpButton = document.querySelector("[data-open-pgp-help]");
  if (pgpDialog && pgpHelpButton) {
    pgpHelpButton.addEventListener("click", function () {
      pgpDialog.showModal();
    });
  }

  var siteNavDialog = document.getElementById("site-nav");
  var siteNavToggle = document.querySelector(".site-nav-toggle");
  if (siteNavDialog && siteNavToggle) {
    var closeSiteNav = siteNavDialog.querySelector(".site-nav-close");
    siteNavToggle.addEventListener("click", function () {
      siteNavToggle.setAttribute("aria-expanded", "true");
      siteNavDialog.showModal();
    });
    siteNavDialog.addEventListener("close", function () {
      siteNavToggle.setAttribute("aria-expanded", "false");
    });
    closeSiteNav.addEventListener("click", function () {
      siteNavDialog.close();
    });
    siteNavDialog.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        siteNavDialog.close();
      });
    });
  }

  updateArticleDates();
});