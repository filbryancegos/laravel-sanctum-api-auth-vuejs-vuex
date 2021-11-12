export default function productHeader() {
	let user = JSON.parse(localStorage.getItem('user'));
	const token = localStorage.getItem('token')
  
	if (token) {
	  return { 
		  Authorization: `Bearer ${token}`,
		  Accept: 'application/json'
		};
	} else {
	  return {};
	}
  }