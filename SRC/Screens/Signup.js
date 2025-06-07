
// const Signup = ({ navigation }) => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');

//   return (
//     <View style={styles.authContainer}>
//       <Text style={styles.authTitle}>Sign Up</Text>
//       <TextInput
//         style={styles.input}
//         placeholder="Email"
//         keyboardType="email-address"
//         value={email}
//         onChangeText={setEmail}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Password"
//         secureTextEntry
//         value={password}
//         onChangeText={setPassword}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Confirm Password"
//         secureTextEntry
//         value={confirmPassword}
//         onChangeText={setConfirmPassword}
//       />
//       <TouchableOpacity
//         style={styles.button}
//         onPress={() => navigation.navigate('Login')}
//       >
//         <Text style={styles.buttonText}>Sign Up</Text>
//       </TouchableOpacity>
//       <TouchableOpacity onPress={() => navigation.navigate('Login')}>
//         <Text style={styles.authLink}>Already have an account? Login</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const Signup = ({ navigation }) => {
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//  const [email, setEmail] = useState('');
//   const handleSignup = () => {
//     if (password !== confirmPassword) {
//       alert('Passwords do not match');
//       return;
//     }

//     const userExists = Users.find((user) => user.email === email);

//     if (userExists) {
//       alert('User already exists. Please login.');
//       navigation.navigate('Login');
//       return;
//     }

//     Users.push({ email, password });
//     alert('Signup successful! Please login.');
//     navigation.navigate('Login');
//   };

//   return (
//     <View style={styles.authContainer}>
//       <Text style={styles.authTitle}>Sign Up</Text>
//       <TextInput
//         style={styles.input}
//         placeholder="Email"
//         keyboardType="email-address"
//         value={email}
//         onChangeText={setEmail}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Password"
//         secureTextEntry
//         value={password}
//         onChangeText={setPassword}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Confirm Password"
//         secureTextEntry
//         value={confirmPassword}
//         onChangeText={setConfirmPassword}
//       />
//       <TouchableOpacity style={styles.button} onPress={handleSignup}>
//         <Text style={styles.buttonText}>Sign Up</Text>
//       </TouchableOpacity>
//       <TouchableOpacity onPress={() => navigation.navigate('Login')}>
//         <Text style={styles.authLink}>Already have an account? Login</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };


// const Signup = ({ navigation }) => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//     const handleSignup = () => {
//     if (!validateEmail(email)) {
//       alert('Invalid email. Email must end with @gmail.com and not contain special characters.');
//       return;
//     }

//     if (!validatePassword(password)) {
//       alert('Invalid password. Password must be at least 8 characters long and include a capital letter, a lowercase letter, a digit, and a special character.');
//       return;
//     }

//     if (password !== confirmPassword) {
//       alert('Passwords do not match');
//       return;
//     }

//     const userExists = Users.find((user) => user.email === email);

//     if (userExists) {
//       alert('User already exists. Please login.');
//       navigation.navigate('Login');
//       return;
//     }

//     Users.push({ email, password });
//     alert('Signup successful! Please login.');
//     navigation.navigate('Login');
//   };
//   return (
//     <View style={styles.authContainer}>
//       <Text style={styles.authTitle}>Sign Up</Text>
//       <TextInput
//         style={styles.input}
//         placeholder="Email"
//         keyboardType="email-address"
//         value={email}
//         onChangeText={setEmail}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Password"
//         secureTextEntry={true}
//         value={password}
//         onChangeText={setPassword}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Confirm Password"
//         secureTextEntry={true}
//         value={confirmPassword}
//         onChangeText={setConfirmPassword}
//       />
//       <TouchableOpacity style={styles.button} onPress={handleSignup}>
//         <Text style={styles.buttonText}>Sign Up</Text>
//       </TouchableOpacity>
//       <TouchableOpacity onPress={() => navigation.navigate('Login')}>
//         <Text style={styles.authLink}>Already have an account? Login</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };
// const styles = StyleSheet.create({
//   authContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#f5f5f5',
//     padding: 20,
//   },
//   authTitle: {
//     fontSize: 28,
//     fontWeight: 'bold',
//     marginBottom: 20,
//   },
//   input: {
//     width: '100%',
//     padding: 15,
//     marginBottom: 15,
//     borderRadius: 10,
//     backgroundColor: '#fff',
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 5,
//     elevation: 2,
//   },
//   button: {
//     backgroundColor: '#007BFF',
//     padding: 15,
//     borderRadius: 10,
//     alignItems: 'center',
//     width: '100%',
//     marginBottom: 10,
//   },
//   buttonText: {
//     color: '#fff',
//     fontWeight: 'bold',
//     fontSize: 16,
//   },
//   authLink: {
//     color: '#007BFF',
//     marginTop: 10,
//     fontSize: 14,
//   },
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     padding: 10,
//   },
//   card: {
//     marginBottom: 20,
//     borderRadius: 10,
//     overflow: 'hidden',
//     backgroundColor: '#f9f9f9',
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.2,
//     shadowRadius: 3,
//     elevation: 5,
//   },
//   image: {
//     width: '100%',
//     height: 200,
//   },
//   description: {
//     padding: 10,
//     fontSize: 14,
//     color: '#555',
//   },
//   bottomRow: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     paddingHorizontal: 10,
//     paddingVertical: 5,
//   },
//   title: {
//     fontSize: 12,
//     fontWeight: '500',
//     color: '#555',
//   },
//   iconRow: {
//     flexDirection: 'row',
//     justifyContent: 'flex-end',
//     alignItems: 'center',
//   },
//   icon: {
//     marginHorizontal: 5,
//   },
// });

// export default Signup;
import { useState } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Users } from './Users';
const validateEmail = (email) => {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
  return emailRegex.test(email);
};

const validatePassword = (password) => {
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  return passwordRegex.test(password);
};
const Signup = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSignup = () => {
    if (!validateEmail(email)) {
      alert('Invalid email. Email must end with @gmail.com and not contain special characters.');
      return;
    }

    if (!validatePassword(password)) {
      alert('Invalid password. Password must be at least 8 characters long and include a capital letter, a lowercase letter, a digit, and a special character.');
      return;
    }

    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    const userExists = Users.find((user) => user.email === email);

    if (userExists) {
      alert('User already exists. Please login.');
      navigation.navigate('Login');
      return;
    }

    Users.push({ email, password });
    alert('Signup successful! Please login.');
    navigation.navigate('Login');
  };

  return (
    <View style={styles.authContainer}>
      <Text style={styles.authTitle}>Sign Up</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />
      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry={!showPassword}
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity
          style={styles.eyeButton}
          onPress={() => setShowPassword(!showPassword)}
        >
          <Icon name={showPassword ? 'visibility' : 'visibility-off'} size={24} color="#555" />
          </TouchableOpacity>
      </View>
      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          secureTextEntry={!showConfirmPassword}
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />
        <TouchableOpacity
          style={styles.eyeButton}
          onPress={() => setShowConfirmPassword(!showConfirmPassword)}
        >
          <Icon name={showConfirmPassword ? 'visibility' : 'visibility-off'} size={24} color="#555" />
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.button} onPress={handleSignup}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.authLink}>Already have an account? Login</Text>
      </TouchableOpacity>
    </View>
  );
};


const styles = StyleSheet.create({
  authContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  authTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    padding: 15,
    marginBottom: 15,
    borderRadius: 10,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    width: '100%',
    marginBottom: 10,
  },
  authLink: {
    color: '#007BFF',
    marginTop: 10,
    fontSize: 14,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
  },
  card: {
    marginBottom: 20,
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: '#f9f9f9',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 5,
  },
  image: {
    width: '100%',
    height: 200,
  },
  description: {
    padding: 10,
    fontSize: 14,
    color: '#555',
  },
  bottomRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  title: {
    fontSize: 12,
    fontWeight: '500',
    color: '#555',
  },
  iconRow: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  icon: {
    marginHorizontal: 5,
  },
  passwordContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
  },
  eyeButton: {
    position: 'absolute',
    right: 15,
  },
});

export default Signup;