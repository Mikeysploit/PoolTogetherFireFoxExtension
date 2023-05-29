browser.webNavigation.onBeforeNavigate.addListener(handleNavigation, { url: [{ hostContains: "pooltogether.com" }] });

function handleNavigation(details) {
  if (isUserLoggedIn()) {
    // If the user is logged in, perform the redirect
    performRedirect();
  } else {
    // Redirect to the options page if the user is not logged in
    browser.tabs.update({ url: browser.extension.getURL("options.html") });
  }
}

function isUserLoggedIn() {
  // Check if the user is logged in (implementation not included)
}
