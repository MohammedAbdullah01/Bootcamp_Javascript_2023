/*
Ajax
	- Ready State => Status Of The Request

	[0] Request Not Initialized
	[1] Server Connection Established
	[2] Request Receives
	[3] Processing Request
	[4] Request Is Finished And Response Iss Ready

	- Status
	[200] Response Is Successful
	[404] Response Not Found
*/

let req = new XMLHttpRequest();

req.open("GET", "https://api.github.com/users/MohammedAbdullah01/repos", true);
req.send();
console.log(req);

req.onreadystatechange = function () {
  console.log(this.readyState);
  console.log(this.status);
  if (this.readyState === 4 && this.status === 200) {
    console.log(this.responseText);
  }
};
