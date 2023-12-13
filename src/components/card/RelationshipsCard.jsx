import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function RelationshipsCard({ children, header = "Amigos" }) {
  return (
    <Card sx={{ minWidth: 275, marginTop: 3, backgroundColor: "#DCE5E3" }}>
      <CardContent>
        <Typography sx={{ fontSize: 18 }} color="text.secondary" gutterBottom>
          {header} :
        </Typography>
        {children}
      </CardContent>
      <CardActions>
        <Button size="small">Ver mais</Button>
      </CardActions>
    </Card>
  );
}