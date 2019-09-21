/* 제이쿼리 구역나누기 */
function fnMove(seq) {
  var offset = $("#box0" + seq).offset();
  $("html, body").animate(
    {
      scrollTop: offset.top
    },
    600
  );
}
