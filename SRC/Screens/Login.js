
// const Login = ({ navigation }) => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   return (
//     <View style={styles.authContainer}>
//       <Text style={styles.authTitle}>Login</Text>
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
//       <TouchableOpacity
//         style={styles.button}
//         onPress={() => navigation.navigate('StartScreen')}
//       >
//         <Text style={styles.buttonText}>Login</Text>
//       </TouchableOpacity>
//       <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
//         <Text style={styles.authLink}>Don’t have an account? Sign Up</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const Login = ({ navigation }) => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleLogin = () => {
//     const userExists = Users.find(
//       (user) => user.email === email && user.password === password
//     );

//     if (userExists) {
//       navigation.navigate('StartScreen');
//     } else {
//       alert('User does not exist or incorrect credentials. Redirecting to Sign Up.');
//       navigation.navigate('Signup');
//     }
//   };

//   return (
//     <View style={styles.authContainer}>
//       <Text style={styles.authTitle}>Login</Text>
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
//       <TouchableOpacity style={styles.button} onPress={handleLogin}>
//         <Text style={styles.buttonText}>Login</Text>
//       </TouchableOpacity>
//       <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
//         <Text style={styles.authLink}>Don’t have an account? Sign Up</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };


// const Login = ({ navigation }) => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleLogin = () => {
//     if (!validateEmail(email)) {
//       alert('Invalid email. Email must end with @gmail.com and not contain special characters.');
//       return;
//     }

//     if (!validatePassword(password)) {
//       alert('Invalid password. Password must be at least 8 characters long and include a capital letter, a lowercase letter, a digit, and a special character.');
//       return;
//     }

//     const userExists = Users.find(
//       (user) => user.email === email && user.password === password
//     );

//     if (userExists) {
//       navigation.navigate('StartScreen');
//     } else {
//       alert('User does not exist or incorrect credentials. Redirecting to Sign Up.');
//       navigation.navigate('Signup');
//     }
//   };

//   return (
//     <View style={styles.authContainer}>
//       <Text style={styles.authTitle}>Login</Text>
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
//       <TouchableOpacity style={styles.button} onPress={handleLogin}>
//         <Text style={styles.buttonText}>Login</Text>
//       </TouchableOpacity>
//       <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
//         <Text style={styles.authLink}>Don’t have an account? Sign Up</Text>
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

// export default Login;

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
const Login= ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    if (!validateEmail(email)) {
      alert('Invalid email. Email must end with @gmail.com and not contain special characters.');
      return;
    }

    if (!validatePassword(password)) {
      alert('Invalid password. Password must be at least 8 characters long and include a capital letter, a lowercase letter, a digit, and a special character.');
      return;
    }

    const userExists = Users.find(
      (user) => user.email === email && user.password === password
    );

    if (userExists) {
      navigation.navigate('BottomTabs');
    } else {
      alert('User does not exist or incorrect credentials. Redirecting to Sign Up.');
      navigation.navigate('Signup');
    }
  };

  return (
    <View style={styles.authContainer}>
      <Text style={styles.authTitle}>Login</Text>
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
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
        <Text style={styles.authLink}>Don’t have an account? Sign Up</Text>
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

export default Login;