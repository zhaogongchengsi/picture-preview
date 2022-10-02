export function observer(el: Element, rootEl?: Element | HTMLBodyElement) {
  function observerHandler(entries: any) {
    // If intersectionRatio is 0, the target is out of view
    // and we do not need to do anything.
    // if (entries[0].intersectionRatio <= 0) return;

    console.log("Loaded new items", entries);
  }

  var intersectionObserver = new IntersectionObserver(observerHandler, {
    rootMargin: "0px",
    threshold: 0,
  });

  intersectionObserver.observe(el);

  return () => {
    intersectionObserver.unobserve(el);
  };
}
