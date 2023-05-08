import swal from "sweetalert";

export default function errorHandle(error) {
  return swal({
    icon: "error",
    title: "Xatolik",
    text: "Amaliyot bajarilmadi, qayta urinish ?",
    buttons: {
      confirm: {
        visible: true,
        text: "Ha",
        value: true,
      },
      cancel: {
        visible: true,
        text: "Yo'q",
        value: false,
      },
    },
    timer: 4000,
  });
}
