import { useRef, useState } from "react";
import {
	Box,
	Button,
	Flex,
	Modal,
	ModalBody,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay,
	Textarea,
	Tooltip,
	useDisclosure,
	Text, // Add Text component for rendering privacy policy
} from "@chakra-ui/react";
import { FaPhoneAlt, FaEnvelope, FaTwitter } from "react-icons/fa";
import { GoLocation } from "react-icons/go";
import { AiFillPhone } from "react-icons/ai";

import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

const Contact = () => {
	const form = useRef();
	const { isOpen, onOpen, onClose } = useDisclosure();
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [subject, setSubject] = useState("");
	const [message, setMessage] = useState("");

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm(
				process.env.REACT_APP_EMAILJS_SERVICE_ID,
				"template_7xyhwen",
				form.current,
				"user_hKs2aRfLoozcqA28UpUyz"
			)
			.then(
				(result) => {
					toast.success("Message sent successfully");
				},
				(error) => {
					toast.error(error.text);
				}
			);

		// Reset form fields after submission
		setName("");
		setEmail("");
		setSubject("");
		setMessage("");

		onClose();
	};

	console.log(Contact);
	return (
		<>
			<Tooltip
				hasArrow
				label={"Contact"}
				placement="right"
				ml={1}
				openDelay={500}
				display={{ base: "block", md: "none" }}
			>
				<Flex
					alignItems="center"
					gap={4}
					_hover={{ bg: "whiteAlpha.400" }}
					borderRadius={6}
					p={2}
					w={{ base: 10, md: "full" }}
					justifyContent={{ base: "center", md: "flex-start" }}
					onClick={onOpen}
				>
					<AiFillPhone size={25} />

					<Box>Contact</Box>
				</Flex>
			</Tooltip>

			<Modal isOpen={isOpen} onClose={onClose} size="xl">
				<ModalOverlay />
				<ModalContent bg={"black"} border={"1px solid gray"}>
					<ModalHeader>Contact Us</ModalHeader>
					<ModalBody pb={6}>
						<form ref={form} onSubmit={sendEmail}>
							<label>Name</label>
							<Textarea
								type="text"
								name="user_name"
								placeholder="Full Name"
								value={name}
								onChange={(e) => setName(e.target.value)}
								required
							/>
							<label>Email</label>
							<Textarea
								type="email"
								name="user_email"
								placeholder="Your active email"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								required
							/>
							<label>Subject</label>
							<Textarea
								type="text"
								name="subject"
								placeholder="Subject"
								value={subject}
								onChange={(e) => setSubject(e.target.value)}
								required
							/>
							<label>Message</label>
							<Textarea
								name="message"
								cols="30"
								rows="10"
								value={message}
								onChange={(e) => setMessage(e.target.value)}
								required
							/>
						</form>
					</ModalBody>
					<ModalFooter>
						<Button colorScheme="blue" mr={3} onClick={sendEmail}>
							Send Message
						</Button>
						<Button onClick={onClose}>Cancel</Button>
					</ModalFooter>
					{'Privacy Policy'}
					<Box p={6}>
						<Text fontSize="sm" color="gray.500">
							{/* Add privacy policy content here */}
							{`Privacy Policy

Last Updated: January 28, 2024

At Eco Exchange we are committed to protecting your privacy and informing you of the data that we get from you. Throughout this Privacy Policy is detailed information regarding your data and what Eco Exchange gathers,utilizes and shares when you visit Eco Exchange website, applications as well as mobile applications. The Privacy Policy link will be made available via all platforms that you access for us.

Notice at Collection
We collect information that could be linked indirectly or directly to a user's personal information. The categories that we collect regarding your personal information include General Location Information, Personal identifiers, Demographic Information, Commercial Information, and Inferences. Why we collect the information is described in the section identified as the” Reason for Collection and Use.”

Categories of Information We Collect
Personal Identifiers - Such as your name, email address, account credentials
Commercial Information
Location Information - Location from IP address or data that points toward a city or postal code level.
Demographic Information - age, age range, birthday
Inferences - Personal information used to create a profile based on a consumer's preferences, predispositions, and characteristics.
Financial Information - credit card information

Reason for Collection and Use
There are several ways which we might utilize your  information , description of which is listed below:
Demographic information: Demographic information is collected with the goal of streamlining services to create a personalized experience on our site. Demographic information can  include your age, birth date and age range any of which could be used to send promotional emails and text and or be used  for the creation of accounts and or rewards/membership programs ( if applicable).

Personal Identifiers: Personal Identifiers can be used to confirm your identity,verify age and or contact you about services or refunds. When Personal Identifiers are collected , it allows Eco Exchange to create a more personalized experience.

Other information used can include Location Information, Financial Information  helps us create your accounts,provide streamlined customer service, identify the area of purchase, purchase history, start orders and implement orders, or refunds, as well as update or product selection.

Other ways you information is use 
We might also use your personal Information for data analytics that gauge customer satisfaction, customer history,  product analytics and identify usage patterns and customer trends.

How we collect Information 
Ways that we might collect your information includes during purchases made online during purchases we collect personal identifiers and financial information.
When you communicate with us via email we might collect online demographic information.
If applicable, through Google and or other Social Media platforms used to interact with our site there is a potential that we might collect personal information and or analytics with us.

Policy and Revision Updates 
We seek to review for compliance and regulation standards our privacy policy once every 12 months so that it is compliant with all privacy laws. If any updates  or revisions do occur we will update the date indicated at the start of the document under “Last Updated.”
If in the future, we collect cookies, we will notify all users of our updated privacy policy.

Disclosure of Information
Please note when we collect your information, it will be shared with our employees and vendors (if applicable) in order to create and fulfill your order.

Your Rights 
You as a consumer have the right to request correction of your personal information. 
You have the right to exercise your rights.
You have the right to request a deletion of your personal information.
You have the right to be free from discrimination.

Protection of Information and Information Security 
Eco Exchange seeks to protect your information  and ensure your Personal Information via technical means are  safe.  Safety and security of your data is not always a guarantee and you share information on the site at your own risk. Do not use this service if you don't agree to the terms of this policy.

Questions 
If you have any questions or concerns about Privacy, you should utilize the chat function on the website/app, and an Eco Exchange representative will reach out to you.`}
						</Text>
					</Box>
				</ModalContent>
			</Modal>
		</>
	);
};

export default Contact;
