import { applicationDefault, getApps, initializeApp } from "firebase-admin/app"
import { getAuth } from "firebase-admin/auth"
import { getFirestore } from "firebase/firestore"

function myApp() {
	if(!getApps().length) {
		let app = initializeApp({
			credential: applicationDefault()
		})
		return app
	} 
}

let fapp = myApp()

const adminFirestore = getFirestore(fapp)
const adminAuth = getAuth(fapp)

export { adminFirestore, adminAuth }

