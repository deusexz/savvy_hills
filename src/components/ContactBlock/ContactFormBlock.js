import React, {useCallback} from 'react';
import styles from './contact.module.css';
import {useDispatch, useSelector} from "react-redux";
import {AnimatePresence, motion} from "framer-motion";
import {toggleContactPopUp} from "../../store/actions/action";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faX} from "@fortawesome/free-solid-svg-icons";
import useContactSubmit from "../../store/hooks/useContactSubmit";

const ContactFormBlock = () => {
    const dispatch = useDispatch();
    const isPopUpToggled = useSelector(store => store.contactBlockReducer.isPopUpToggled);
    const {register, errors, handleSubmit, onSubmit} = useContactSubmit();


    const togglePopUp = () =>{
        dispatch(toggleContactPopUp());
    }

    return (
        <AnimatePresence>
            {
                isPopUpToggled &&
                <motion.div className={styles.contactOverlay}
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            exit={{opacity: 0}}
                >
                    <div className={styles.contactWrapper}>
                        <FontAwesomeIcon className={styles.closeButton} icon={faX} onClick={togglePopUp}/>
                        <div className={styles.contactBackground}>
                            <div className={styles.backgroundOverlay}>
                                <h3>Contact Us</h3>
                                <p>New York 575 Madison Ave</p>
                                <p>(212) 755-3388</p>
                                <a href="mailto:info@hills.com">info@hills.com</a>
                            </div>
                        </div>

                        <div className={styles.contactForm}>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <label>
                                    <input className={styles.name} placeholder={"Name"} {...register("firstName", {
                                        required: "Name is required.",
                                    })} />
                                    {errors.firstName && <p className={styles.errorMessage}>Name is required.</p> }
                                </label>
                                <label>
                                    <input className={styles.phone} placeholder={"Phone Number"} {...register("number", {
                                        required: "Phone number is required.",
                                        pattern: {
                                            value:/^(?:\+?\d{1,3})?[-. (]?(\d{3})[-. )]?(\d{3})[-.]?(\d{4})$/,
                                            message: "Invalid phone number."
                                        }
                                    })}/>
                                    {errors.number && <p className={styles.errorMessage}>Invalid phone number.</p> }
                                </label>
                                <label className={styles.mail}>
                                    <input placeholder={"Email"} {...register("email", {
                                        required: "Email is required.",
                                        pattern: {
                                            value:/^[\w-\.]+@([\w-]+\.)+[\w-]{2,5}$/,
                                            message: "Invalid email address."
                                        }
                                    })} />
                                    {errors.email && <p className={styles.errorMessage}>Invalid Email address.</p> }
                                </label>
                                <label className={styles.msg}>
                                    <input  placeholder={"Message"} {...register("msg")} />
                                </label>
                                <button className={styles.submitButton} type={"submit"}>Submit</button>
                            </form>
                        </div>
                    </div>
                </motion.div>
            }
        </AnimatePresence>
    );
}

export default ContactFormBlock;