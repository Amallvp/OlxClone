import React, { useContext, useEffect, useState } from 'react';
import { FirebaseContext } from '../../store/Context';
import { post_Context } from '../../store/postContext';

import './View.css';



function View() {

    const [userDetails, setUserDetails] = useState([])
    const { postDetails } = useContext(post_Context)

    const { firebase } = useContext(FirebaseContext)

//    console.log(postDetails);
    useEffect(() => {

        const  {userId } = postDetails

       

        firebase.firestore().collection('users').where('id', '==', userId).get().then((res) => {

            res.forEach(doc => {

                setUserDetails(doc.data())

                // console.log(doc.data());
            })
           
        })
    }, [postDetails,firebase])

    return (
        <div className="viewParentDiv">
            <div className="imageShowDiv">
                <img
                    src={postDetails.url}
                    alt=""
                />
            </div>
            <div className="rightSection">
                <div className="productDetails">
                    <p>&#x20B9; {postDetails.price}</p>
                    <span>{postDetails.name}</span>
                    <p>{postDetails.category}</p>
                    <span>{postDetails.createdAt}</span>
                </div>
             {  userDetails && <div className="contactDetails">
                    <p>Seller details</p>
                    <p>{userDetails.username}</p>
                    <p>{userDetails.phone}</p>
                </div>}
            </div>
        </div>
    );
}
export default View;
