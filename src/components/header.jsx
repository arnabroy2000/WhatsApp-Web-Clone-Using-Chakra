import { Avatar,Box,Flex, HStack, Tooltip, IconButton } from "@chakra-ui/react";
import { CommunityIcon, MenuIcon, NewChatIcon, StatusIcon } from "../assets/icons";

const iconData =[
    { icon: <CommunityIcon />, label: 'Community Chat'},
    { icon: <StatusIcon />, label: 'Status'},
    { icon: <NewChatIcon />, label: 'New Chat'},
    { icon: <MenuIcon />, label: 'Menu'},
];

function CustomTooltip({ label, icon, ...rest}) {
    return (
        <Tooltip shouldWrapChildren
        label={label}
        bg='#eae6df'
        color='black'
        fontSize='xs'
        {...rest}>
            <IconButton variant='ghost'>{icon}</IconButton>
        </Tooltip>
    );
}

export function Header(props) {
    return (
        <Flex bg='#f0f2f5'
            justify='space-between'
            py='2'
            px='4'
            borderRight='1px solid #f2f2f2'
            color='#54656f'
            {...props}>
            <Avatar boxSize='40px'
                name='Arnab Roy'
                src='https://avatars.githubusercontent.com/u/49182658?v=4'
            />
            <HStack>
                {iconData.map((item, index) => (
                    <CustomTooltip key={index} label={item.label} icon={item.icon}/>
                ))}
            </HStack>

            
        </Flex>
    );
}