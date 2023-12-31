import HospitalContext from "./HospitalContext";

const HospitalState = (props) => {

    const getHospital = async (disSel) => {
        const res = await fetch(`${process.env.REACT_APP_HOST}/api/hospital/getHos`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body : JSON.stringify({"state": "Karnataka", "district": disSel})
        })

        const response = await res.json()
        return response
    }

    const getHospitals = async () => {
        const res = await fetch(`${process.env.REACT_APP_HOST}/api/hospital/getHospitals`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            }
        })

        const response = await res.json()
        return response
    }

    const getHospitalData = async (hospitalID) => {
        const res = await fetch(`${process.env.REACT_APP_HOST}/api/hospital/getHospital`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({"hospitalID" : hospitalID})
        })
        const response = await res.json()
        if(response.Hospital)
            return response
    }

    const getCities = async () => {
        const res = await fetch(`${process.env.REACT_APP_HOST}/api/hospital/getCities`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            }
        })

        const response = await res.json()
        return response
    }

    const getFacility = async(hospitalID) => {
        const res = await fetch(`${process.env.REACT_APP_HOST}/api/facility/getFacility`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({"hospitalID": hospitalID})
        })

        const response = await res.json()
        return response
    }



    return (
        <HospitalContext.Provider value={{getHospitals, getHospital, getCities, getHospitalData, getFacility}}>
            {props.children}
        </HospitalContext.Provider>
    )
}

export default HospitalState