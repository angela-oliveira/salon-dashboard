import React, { useState }  from 'react';
import Notification from '../Notification';

import { MdNotifications } from 'react-icons/md'
import { HeaderContainer, Image, Container, Avatar, AvatarText } from './styles';

const Header = () => {
  const [isNotificationVisible, setIsNotificationVisible] = useState(true);
  return (
    <HeaderContainer>
      <Image src="images/logo.png"/>
      
      <Container>
        <Notification
          isVisible={isNotificationVisible}
          onClick={() => setIsNotificationVisible(!isNotificationVisible)}
        >
          <MdNotifications color={'#7C7C7C'} size={25} />
          
        </Notification>
        <Avatar src="images/fotocv.jpg" size={40} />

        <AvatarText>Jéssica Morais</AvatarText>
      </Container>
    </HeaderContainer>
  );
};

export default Header;
