import { Box,Flex } from "@chakra-ui/react";
import { Header } from "./header";
import { SearchPanel } from "./search-panel";
import { ChatList } from "./chat-list";

export function LeftPanel(props){
    return(
        <Flex direction='column' {...props} w="30%">
            <Box>
                <Header />
                <SearchPanel />
            </Box>
            <ChatList flex='1' overflow='auto'/>
        </Flex>
    );
}

