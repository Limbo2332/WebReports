function getId(id) {
  return document.getElementById(id);
}
function getClass(className) {
  return document.getElementsByClassName(className)[0];
}
function changeYear() {
  getId("yearSelect").onchange = function () {
    var sel = getId("yearSelect").selectedIndex;
    var currentYear = getId("yearSelect").options[sel].text;
    c.currYear = Number(currentYear);
    c.showcurr();
  };
}

function changeDay() {
  let daySelect = document.querySelectorAll("td.normal");
  daySelect.forEach((dayTd) => {
    dayTd.onclick = function () {
      c.currDay = Number(dayTd.textContent);
      getId("date").value =
        c.currDay + "/" + (c.currMonth + 1) + "/" + c.currYear;
    };
  });
}

class Cal {
  constructor(divId) {
    this.divId = divId;
    // Масив днів тижня
    this.DaysOfWeek = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Нд"];
    // Масив місяців
    this.Months = [
      "Січень",
      "Лютий",
      "Березень",
      "Квітень",
      "Травень",
      "Червень",
      "Липень",
      "Серпень",
      "Вересень",
      "Жовтень",
      "Листопад",
      "Грудень",
    ];
    // Встановлюємо нинішній рік і місяць
    var d = new Date();
    this.currMonth = d.getMonth();
    this.currYear = d.getFullYear();
    this.currDay = d.getDate();
  }
  // Перехід до наступного місяця
  nextMonth() {
    if (this.currMonth == 11) {
      this.currMonth = 0;
      this.currYear = this.currYear + 1;
    } else {
      this.currMonth = this.currMonth + 1;
    }
    this.showcurr();
  }
  // Перехід до минулого місяця
  previousMonth() {
    if (this.currMonth == 0) {
      this.currMonth = 11;
      this.currYear = this.currYear - 1;
    } else {
      this.currMonth = this.currMonth - 1;
    }
    this.showcurr();
  }
  // Показати нинішній місяць
  showcurr() {
    this.showMonth(this.currYear, this.currMonth);
  }
  // Показати місяць і рік
  showMonth(y, m) {
    var d = new Date(),
      // Перший день тижня
      firstDayOfMonth = new Date(y, m, 7).getDay(),
      // Останній день місяця
      lastDateOfMonth = new Date(y, m + 1, 0).getDate(),
      // Останній день місяця минулого місяця
      lastDayOfLastMonth =
        m == 0 ? new Date(y - 1, 11, 0).getDate() : new Date(y, m, 0).getDate();
    var html = "<table>";
    html += "<thead><tr>";
    html +=
      '<td colspan="7" id="monthSelect">' +
      this.Months[m] +
      " " +
      "<select id='yearSelect'>";
    for (let i = 2060; i > this.currYear; i--) {
      html += "<option>" + i + "</option>";
    }
    html += "<option selected='selected'>" + this.currYear + "</option>";
    for (let i = this.currYear - 1; i > 1980; i--) {
      html += "<option>" + i + "</option>";
    }
    html += "</select>";
    html += "</tr></thead>";
    html += '<tr class="days">';
    for (var i = 0; i < this.DaysOfWeek.length; i++) {
      html += "<td>" + this.DaysOfWeek[i] + "</td>";
    }
    html += "</tr>";
    var i = 1;
    do {
      var dow = new Date(y, m, i).getDay();
      // Почати новий рядок з понеділка
      if (dow == 1) {
        html += "<tr>";
      }

      // Якщо перший день не понеділок
      else if (i == 1) {
        html += "<tr>";
        var k = lastDayOfLastMonth - firstDayOfMonth + 1;
        for (var j = 0; j < firstDayOfMonth; j++) {
          html += '<td class="not-current">' + k + "</td>";
          k++;
        }
      }
      html += '<td class="normal">' + i + "</td>";
      if (dow == 0) {
        html += "</tr>";
      }

      // Якщо останній день не неділя
      else if (i == lastDateOfMonth) {
        var k = 1;
        for (dow; dow < 7; dow++) {
          html += '<td class="not-current">' + k + "</td>";
          k++;
        }
      }
      i++;
    } while (i <= lastDateOfMonth);
    html += "</table>";
    document.getElementById(this.divId).innerHTML = html;
  }
}
let c = new Cal("divCal");

window.onload = function () {
  getId("showDate").addEventListener("click", function () {
    if (getClass("calendar-wrapper").classList.contains("d-none")) {
      getClass("calendar-wrapper").classList.remove("d-none");
    } else {
      getClass("calendar-wrapper").classList.add("d-none");
    }
  });
  c.showcurr();
  getId("btnNext").onclick = function () {
    c.nextMonth();
    changeYear();
    changeDay();
  };
  getId("btnPrev").onclick = function () {
    c.previousMonth();
    changeYear();
    changeDay();
  };
  changeYear();
  changeDay();
  getId("reset").onclick = function () {
    getId("date").value = "";
    getClass("calendar-wrapper").classList.add("d-none");
  };
};
document.onchange = function () {
  changeYear();
  changeDay();
};
