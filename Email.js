// 1. Define the function
function maskEmail(email) {
    // find where @ is
    let atIndex = email.indexOf("@");
    // get the username part (before @)
    let username = email.slice(0, atIndex);
    // get the domain part (after @)
    let domain = email.slice(atIndex);
  
    // mask: keep first and last character, replace middle with *
    if (username.length <= 2) {
      // if username has only 2 chars, no middle part
      return username[0] + "*" + domain;
    }
    
    let masked =
      username[0] + "*".repeat(username.length - 2) + username[username.length - 1];
  
    return masked + domain;
  }
  
  // 2. Declare a variable outside the function
  let email = "apple.pie@example.com";
  
  // 3. Call the function and log the result
  console.log(maskEmail(email));
  
  // --- Test cases ---
  console.log(maskEmail("apple.pie@example.com"));   // "a*******e@example.com"
  console.log(maskEmail("freecodecamp@example.com")); // "f**********p@example.com"
  console.log(maskEmail("info@test.dev"));            // "i**o@test.dev"
  console.log(maskEmail("user@domain.org"));          // "u**r@domain.org"
  