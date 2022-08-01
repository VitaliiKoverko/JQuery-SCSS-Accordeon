// console.log("TEST");
$('.box__content').hide().eq(2).show()
$(document).on('click', '.box-accordeon__title', handle)

function handle(e) {
  $(this).next('.box__content').slideDown(500)
    .closest('.box__item').siblings('.box__item').find('.box__content').slideUp(500)
}


function initMobile() {
  console.log("is-mobile");
}

function initTablet() {
  console.log("is-tablet");
}

function initDesktop() {
  console.log("is-desktop");
}

ssm.addStates([
  {
    id: "mobile",
    query: "(max-width: 640px)",
    onEnter: function () {
      initMobile();
    },
  },
  {
    id: "tablet",
    query: "(min-width: 641px) and (max-width: 992px)",
    onEnter: function () {
      initTablet();
    },
  },
  {
    id: "desktop",
    query: "(min-width: 993px)",
    onEnter: function () {
      initDesktop();
    },
  },
]);
