import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function RelationshipCard({ name, img, common_friends, is_friend = false }) {
  const common_friend_formated = is_friend ? common_friends.length : common_friends.join(" | ");
  const border_color = is_friend ? "10px solid #CE6A85" : "10px solid #5ABCB9";
  const min_height = is_friend ? "30px" : "100px";

  return (
    <Card sx={{ display: 'flex', borderBottom: `${border_color}` }}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
            {name}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary"
            sx={{ maxWidth: "200px", minHeight: `${min_height}`, fontSize: "14px" }} component="div">
            Amigos em comum : {common_friend_formated}
          </Typography>
        </CardContent>
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 151, borderRadius: 100, width: 100, height: 100, padding: 1 }}
        image={img}
        alt="Foto de perfil"
      />
    </Card>
  );
}