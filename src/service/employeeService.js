import bp from "../firebase";
import {addDoc, collection, getDocs} from "firebase/firestore"


const addEmployeeToFirebase = async (employee) => {
    try {
        await addDoc(collection(bp, "emplyee"), employee)
    } catch (error) {
        console.log("Error in adding user to firebase")
    }
}

const getEmployeesFromFirebase = async () => {
    const documents = await getDocs(collection(db, "employee"))
    const employees = documents.docs.map(doc => doc.data());
    console.log(employees);
    return employees;
}

export {addEmployeeToFirebase, getEmployeesFromFirebase}