import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

interface ProjectComponentProps {
  post: {
    heading: string;
    description: string;
    image: string;
    imageLabel: string;
    imageWidth: number;
  };
}
export default function ProjectComponent(props: ProjectComponentProps) {
  const { post } = props;

  return (
    <Grid item xs={12} md={12}>
      <Card sx={{ display: 'flex' }}>
        <CardContent sx={{ flex: 1 }}>
          <Typography component="h2" variant="h5">
            {post.heading}
          </Typography>
          <Typography variant="subtitle1" paragraph>
            {post.description}
          </Typography>
        </CardContent>
        <CardMedia
          component="img"
          sx={{ width: post.imageWidth, display: { xs: 'none', sm: 'block' } }}
          image={post.image}
          alt={post.imageLabel}
        />
      </Card>
    </Grid>
  );
}