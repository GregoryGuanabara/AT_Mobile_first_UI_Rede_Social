import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function PostCard({ name, img, title, date, shares, text, likes, comments }) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const firstLetter = name[0].toUpperCase();

  const formatedDate = new Date(date).toLocaleDateString('pt-Br', {
    weekday: "short",
    day: "2-digit",
    month: "short",
    year: "numeric"
  }).replaceAll(",", "");

  return (
    <Card sx={{ maxWidth: 345, border: "1px solid #FAFF70"}}>
      <Typography sx={{ marginTop: 1 }} color="#7F9C96">
        {name} Postou:
      </Typography>
      <CardHeader
        avatar={
          <Avatar sx={{ width: 60, height: 60, bgcolor: "#CBDF90", color: "text.secondary", border: "1px solid #4D7C8A" }} aria-label="recipe">
            {firstLetter}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={title}
        subheader={formatedDate}
      />
      <CardMedia
        component="img"
        height="194"
        image={img}
        alt="Imagem postada pelo usuário."
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {text}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <Typography sx={{ margin: 1 }} variant="body2" color="text.secondary">
            {likes}
          </Typography>
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <Typography sx={{ margin: 1 }} variant="body2" color="text.secondary">
            {shares}
          </Typography>
          <ShareIcon />
        </IconButton>
        <Typography variant="body2" color="text.secondary" sx={{ marginLeft: 2 }}>
          Ver os comentários({comments.length}):
        </Typography>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="ver comentário"
          sx={{ margin: 0, paddingLeft: 0 }}
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        {
          comments.map(comment => (
            <CardContent key={comment.id} sx={{ margin: 0, paddingLeft: 0, backgroundColor: "#CBDF90" }}>
              <Typography variant="body2" color="text.secondary">{comment.name}:</Typography>
              <Typography paragraph>
                {comment.comment}
              </Typography>
            </CardContent>
          ))
        }

      </Collapse>
    </Card>
  );
}