import swal from "sweetalert";

export default {
  currency(number = 0) {
    return Intl.NumberFormat("uz").format(number.toFixed(2));
  },
  captalize(string = "") {
    return string.charAt(0).toUpperCase() + string.slice(1);
  },
  success(title = "") {
    return swal({
      icon: "success",
      title: title || " ",
      buttons: false,
      timer: 1000,
    });
  },
  err(title = "") {
    return swal({
      icon: "error",
      title: title || " ",
      buttons: false,
      timer: 1500,
      dangerMode: true,
    });
  },
  countDays(start, end) {
    let start_date = start ? new Date(start) : new Date(),
      end_date = new Date(end),
      difference = end_date.getTime() - start_date.getTime(),
      days = Math.ceil(difference / (1000 * 3600 * 24));
    return days;
  },
  countOrdinalNumber(index, page, limit) {
    let start = null,
      numbers = [];
    start = (page - 1) * limit;
    for (let i = 0; i < limit; i++) {
      numbers.push(start);
      start++;
    }
    return numbers[index] + 1;
  },
};
