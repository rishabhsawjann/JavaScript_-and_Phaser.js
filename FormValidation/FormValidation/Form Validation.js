function validateName(name) {
    // Must be at least 2 characters
    if (name.length < 2) {
      return false;
    }
  
    // Check each character
    for (let i = 0; i < name.length; i++) {
      let ch = name[i].toLowerCase();
      if (!((ch >= 'a' && ch <= 'z') || ch === ' ')) {
        return false; // if not a letter or space, invalid
      }
    }
  
    return true; // passes all checks
  }
  
  function validateUsPhone(phone)
  {
    let digitCount=0;

  for(let i=0;i<phone.length;i++)
  {
    let digit=phone[i];

  //Allow digits
    if(digit>='0' && digit<='9')
    {
        digitCount++;// this is for counting the digits so we don't
        // exceed more than 10
    }
    else if(digit==='-'||digit==='')
    {
        continue;
    }
    else{
        return false;
    }
}
return digitCount===10;
}


  
  function validateDate(date)
  {
    //Split by '/'
    const parts=date.split('/');
    if(parts.length!=3)
    {
        return false;
    }
    //converting string to numbesr usigg parseInt and base 10
    const month=parseInt(parts[0],10);
    const day=parseInt(parts[1],10);
    const year=parseInt(parts[2],10);
    
    //check if all the parts are valid Numbers
    if(isNaN(month)||isNaN(day)||isNaN(year))
    {
        return false;
    }
    //check month range
    if(month<1||month>12)
    {
        return false;
    }
    //days in each month
    const daysInMonth = [
        31,
        (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0) ? 29 : 28,
        31, 30, 31, 30, 31, 31, 30, 31, 30, 31
    ];

    if (day < 1 || day > daysInMonth[month - 1]) return false;
    if (year < 1) return false;

    return true;
}

  function validateForm() {
    let isValid = true;
  
    // Name check
    const name = document.getElementById("name").value.trim();
    if (!validateName(name)) {
      document.getElementById("nameError").innerText = "Invalid name!";
      isValid = false;
    } else {
      document.getElementById("nameError").innerText = "";
    }
  
    // Phone check
    const phone = document.getElementById("phone").value.trim();
    if (!validateUsPhone(phone)) {
      document.getElementById("phoneError").innerText = "Invalid US phone format!";
      isValid = false;
    } else {
      document.getElementById("phoneError").innerText = "";
    }
  
    // Date check
    const date = document.getElementById("date").value.trim();
    if (!validateDate(date)) {
      document.getElementById("dateError").innerText = "Invalid date format!";
      isValid = false;
    } else {
      document.getElementById("dateError").innerText = "";
    }
  
    // Show final message
    const messageEl = document.getElementById("formMessage");
    if (isValid) {
      messageEl.innerText = "✅ Form is valid, details accepted!";
      messageEl.className = "success";
    } else {
      messageEl.innerText = "❌ Form is invalid, please fix errors!";
      messageEl.className = "fail";
    }
  
    return false; // prevent actual form submission (for demo)
  }
  