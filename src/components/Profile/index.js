import React from "react";

import CardProfile from '../CardProfile'
import DataProfile from '../DataProfile'

import { Container, Layout } from './styles';
function Profile() {

  return (
    <> 
    <Container>

    </Container>
    <Container>
      <Layout>
         <CardProfile />
         <DataProfile />
      </Layout>
    </Container>
    </>
  )
}
export default Profile;