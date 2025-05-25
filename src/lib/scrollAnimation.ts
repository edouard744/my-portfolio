export function initScrollAnimations() {

  let elements;
  if (!window.IntersectionObserver || isSlowConnection()) {
    // If the connection is slow or the IntersectionObserver is not supported, no animation will be applied
    return;
  } else {
    elements = document.querySelectorAll(".animate-on-scroll");
    elements.forEach((el) => {
      el.classList.add("pre-animate");
    });
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-in");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    },
  );

  elements.forEach((el) => observer.observe(el));

  // Disconnect the observer when the component unmounts
  return () => observer.disconnect();
}

function isSlowConnection(): boolean {
  if (!hasConnection(navigator)) {
    return false;
  }
  const connection = navigator.connection;

  // Verify if the connection is slow
  if ("effectiveType" in connection) {
    const slowConnections = ["slow-2g", "2g", "3g"];
    if (slowConnections.includes(connection.effectiveType)) {
      return true;
    }
  }

  // Two more checks for slow connection
  if ("downlink" in connection && typeof connection.downlink === "number") {
    if (connection.downlink < 0.5) {
      return true;
    }
  }
  if ("rtt" in connection && typeof connection.rtt === "number") {
    if (connection.rtt > 2000) {
      return true;
    }
  }

  // All passed, animation will not slow the render of the page
  return false;
}
function hasConnection(nav: Navigator): nav is Navigator & { connection: any } {
  return "connection" in nav && nav.connection !== undefined;
}

