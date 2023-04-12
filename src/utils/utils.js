import swal from "sweetalert";

export default {
  currency(number = 0) {
    return Intl.NumberFormat("uz").format(number.toFixed(2));
  },
  success() {
    return swal({
      icon: "success",
      title: " ",
      buttons: false,
      timer: 1200,
    });
  },
  err(title = " ") {
    return swal({
      icon: "error",
      title: title,
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
  ssa(array, sort_key, search_key, search) {
    return array
      .sort((x, y) => {
        let a = x[sort_key];
        let b = y[sort_key];
        return a > b ? 1 : a == b ? 0 : -1;
      })
      .filter((item) => {
        return String(item[search_key])
          .toLowerCase()
          .match(String(search).toLowerCase());
      });
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
