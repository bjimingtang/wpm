// initialize dictionary
let dictionary;

// read in dictionary with an xhttp request
let xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    // to account for different systems possibly treating the carriage return/newline differently,
    // split over each instance of either and then filter out empty strings
    dictionary = this.responseText.split(/[\r\n]/).filter(function (element) {
      return element != "";
    });
  }
};
xhttp.open("POST", "../resources/words.txt", true);
xhttp.send();
