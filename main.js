// 1. Complete the function below called `contactFactory`:
// * `contactFactory` returns an object with three properties: name, title, email.
// * Make `contactFactory` take a single argument, which will be treated as an array.
// * In the body of the function, loop over that array to set the values of the object's properties.

function contactFactory(contactData) {
    let contact = {
      name: null,
      title: null,
      email: null
    }
    for (let i=0; i < contactData.length; i++) {
       ///add each array item to contact
       if (i === 0){
        contact.name = contactData[i]
       }
       else if (i === 1) {
        contact.title = contactData[i]
       }
       else if (i === 2) {
        contact.email = contactData[i]
       }
     }
    return contact
  }

// 2. Complete the second function called `createContact`:
// * createContact takes three arguments: name, title, email.
// * Have the function place the three arguments into an array and pass that array to the `contactFactory` by calling it.

function createContact(name, title, email) {
  let newContact = [name, title, email]/// pass name, title, email to contactFactory as an array
  let contact = contactFactory(newContact)
  console.table(contact)
}

createContact("Sam", "Birky", "Email")
