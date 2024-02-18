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
					<Text fontSize="sm" color="gray.500" p={6}>
						Privacy Policy
						<br />
						<br />
						Last Updated: January 28, 2024
						<br />
						<br />
						At Eco Exchange we are committed to protecting your privacy and informing you of the data that we get from you. Throughout this Privacy Policy is detailed information regarding your data and what Eco Exchange gathers, utilizes and shares when you visit Eco Exchange website, applications as well as mobile applications. The Privacy Policy link will be made available via all platforms that you access for us.
						<br />
						<br />
						Notice at Collection
						<br />
						We collect information that could be linked indirectly or directly to a user's personal information. The categories that we collect regarding your personal information include General Location Information, Personal identifiers, Demographic Information, Commercial Information, and Inferences. Why we collect the information is described in the section identified as the” Reason for Collection and Use.”
						<br />
						<br />
						... (remaining content)
					</Text>
				</ModalContent>
			</Modal>
		</>
	);
};

export default Contact;
