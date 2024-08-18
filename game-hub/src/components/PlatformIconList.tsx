import { Platform } from "../hooks/GamesHook"
import { HStack, Icon } from "@chakra-ui/react"
import { FaPlaystation, FaXbox, FaApple, FaLinux, FaAndroid } from "react-icons/fa6";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo, SiWindows11 } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { IconType } from "react-icons";

interface Props {
    platforms: Platform[]
}

const PlatformIconList = ({ platforms }: Props) => {

    const iconMap: { [key: string]: IconType } = {
        pc: SiWindows11,
        playstation: FaPlaystation,
        xbox: FaXbox,
        nintendo: SiNintendo,
        mac: FaApple,
        linux: FaLinux,
        ios: MdPhoneIphone,
        web: BsGlobe,
        android: FaAndroid,
    }
    return (
        <HStack marginY={1}>
            {platforms.map((platform) =>
                <Icon as={iconMap[platform.slug]} color='gray.500' />
            )}
        </HStack>
    )
}

export default PlatformIconList