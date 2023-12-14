import './App.css'
import AppBar from './components/appbar/Appbar'
import Header from './components/header/Header'
import Container from './components/container/Container'
import FeedCard from './components/card/FeedCard'
import PostCardList from './components/list/PostCardList'
import RelationshipsCard from './components/card/RelationshipsCard'
import RelationshipCardList from './components/list/RelationshipCardList'
import Footer from './components/footer/Footer'
import { useState, useEffect } from 'react';

async function LoadData() {
  const response = await fetch(`profile.json`);
  const profile = await response.json();
  return profile;
}

const initialProfile =
{
  "id": "0",
  "name": "",
  "posts": [],
  "friends": [],
  "friend_suggestions": []
}

export default function App() {
  const [profile, setProfile] = useState(initialProfile);

  async function requestProfile() {
    const profileResponse = await LoadData();
    setProfile(profileResponse);
  }

  useEffect(() => {
    requestProfile();
  }, []);

  return (
    <main>
      <Header>
        Rede Social
      </Header>
      <AppBar />
      <Container>
        <FeedCard>
          <PostCardList posts={profile.posts} />
        </FeedCard>
        <RelationshipsCard>
          <RelationshipCardList is_friend relationships={profile.friends} />
        </RelationshipsCard>
        <RelationshipsCard header='Talvez você conheça'>
          <RelationshipCardList relationships={profile.friend_suggestions} />
        </RelationshipsCard>
        <Footer>Desenvolvido por Gregory Andrade Guanabara para o Assessment da disciplina Mobile-first UI com React. Todos direitos reservados a Rede Social.</Footer>
      </Container>
    </main >
  )
}
