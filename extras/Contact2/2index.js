// import React, { useState } from 'react';
// import Particle from '../Particle';
// import './ContactForm.css';
// const ContactForm = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [mobile, setMobile] = useState('');
//   const [resume, setResume] = useState('');
//   const [description, setDescription] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const formData = new FormData();
//     formData.append('name', name);
//     formData.append('email', email);
//     formData.append('mobile', mobile);
//     formData.append('resume', resume);
//     formData.append('description', description);

//     fetch('/send-email', {
//       method: 'POST',
//       body: formData,
//     })
//       .then((response) => response.json())
//       .then((data) => console.log(data))
//       .catch((error) => console.log(error));
//   };

//   return (
//     <div style={{ padding: 250, textAlign: "center" }}>
//       <form onSubmit={handleSubmit}><Particle />
//         <label>
//           Name:
//           <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
//         </label>
//         <br />
//         <label>
//           Email:
//           <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
//         </label>
//         <br />
//         <label>
//           Mobile:
//           <input type="tel" value={mobile} onChange={(e) => setMobile(e.target.value)} />
//         </label>
//         <br />
//         <label>
//           Resume:
//           <input type="file" onChange={(e) => setResume(e.target.files[0])} />
//         </label>
//         <br />
//         <label>
//           Description:
//           <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
//         </label>
//         <br />
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// };

// export default ContactForm;
