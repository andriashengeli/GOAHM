const turningonpc= () => new Promise(resolve => setTimeout(() => resolve("Powering on "),500))
const bootos= () => new Promise(resolve => setTimeout(() => resolve("booting up"),2500))
const login= () => new Promise(resolve => setTimeout(() => resolve("Logging in "),1000))

const pc = async () => {
    try {
        const turnon = await turningonpc()
        console.log(turnon)
        console.log("your pc is turned on succesfuly")

        const boot = await bootos()
        console.log(boot)
        console.log("boot os is ready")

        const Login = await login()
        console.log(Login)
        console.log("you are logged into your pc ")

        console.log("your pc is ready enjoy!")
    } catch (err) {
        console.log(err)
    }
} 

pc()