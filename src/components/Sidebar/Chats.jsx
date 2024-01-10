import { Box, Link, Tooltip } from "@chakra-ui/react";
import { AiFillMessage } from "react-icons/ai";
import { Link as RouterLink } from "react-router-dom";

const Chats = () => {
	return (
		<Tooltip
			hasArrow
			label={"Chats"}
			placement='right'
			ml={1}
			openDelay={500}
			display={{ base: "block", md: "none" }}
		>
			<Link
				display={"flex"}
				to={"/Chats"}
				as={RouterLink}
				alignItems={"center"}
				gap={4}
				_hover={{ bg: "whiteAlpha.400" }}
				borderRadius={6}
				p={2}
				w={{ base: 10, md: "full" }}
				justifyContent={{ base: "center", md: "flex-start" }}
			>
				<AiFillMessage size={25} />
				<Box display={{ base: "none", md: "block" }}>Contact Us</Box>
			</Link>
		</Tooltip>
	);
};

export default Chats;