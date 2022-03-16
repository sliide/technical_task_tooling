import * as React from 'react';
import LaunchpadPreview from "../components/LaunchpadPreview";
import { useFormik } from 'formik';
import * as yup from 'yup';
import {
  Grid,
  Typography,
  Box,
  TextField,
  Button,
  FormControlLabel,
  Checkbox,
  FormControl,
  InputLabel,
  Select,
  MenuItem
} from '@mui/material';

const validationSchema = yup.object({
  brandName: yup
    .string('Enter your brand name')
    .required('Brand name is required'),
  primaryColour: yup
    .string('Enter your primary colour')
    .required('Primary colour hex is required'),
  searchPlaceholder: yup
    .string('Enter a search placeholder')
    .required('Search placeholder is required'),
  articleLimit: yup
    .string('Select an article limit')
    .required('Article limit is required'),
});

export default function BrandingForm() {

  const formik = useFormik({
    initialValues: {
      brandName: '',
      primaryColour: '',
      searchPlaceholder: '',
      articleLimit: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
    },
  });

  return (
    <React.Fragment>
      <Box component="form" noValidate onSubmit={formik.handleSubmit} sx={{ mt: 1 }}>
        <Grid container>
          <Grid item xs={6}>

            <Typography variant="h6" gutterBottom>
              Branding
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="brandName"
                  name="brandName"
                  label="Brand name"
                  value={formik.values.brandName}
                  onChange={formik.handleChange}
                  error={formik.touched.brandName && Boolean(formik.errors.brandName)}
                  helperText={formik.touched.brandName && formik.errors.brandName}
                  autoFocus
                  autoComplete="false"
                  variant="standard"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="primaryColour"
                  name="primaryColour"
                  label="Primary colour"
                  value={formik.values.primaryColour}
                  onChange={formik.handleChange}
                  error={formik.touched.primaryColour && Boolean(formik.errors.primaryColour)}
                  helperText={formik.touched.primaryColour && formik.errors.primaryColour}
                  autoComplete="false"
                  variant="standard"
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  variant="outlined"
                  component="label"
                >
                  Select Logo
                  <input
                    type="file"
                    accept="image/*"
                    hidden
                  />
                </Button>
              </Grid>
            </Grid>

            <Typography variant="h6" gutterBottom sx={{ mt: 4 }}>
              Search Settings
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="searchPlaceholder"
                  name="searchPlaceholder"
                  label="Search placeholder"
                  value={formik.values.searchPlaceholder}
                  onChange={formik.handleChange}
                  error={formik.touched.searchPlaceholder && Boolean(formik.errors.searchPlaceholder)}
                  helperText={formik.touched.searchPlaceholder && formik.errors.searchPlaceholder}
                  autoComplete="false"
                  variant="standard"
                />
              </Grid>
            </Grid>

            <Typography variant="h6" gutterBottom sx={{ mt: 4 }}>
              Quick Links
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox color="secondary" name="quickLinks" value="yes" />}
                  label="Display 'Popular on the Web' apps"
                />
              </Grid>
            </Grid>

            <Typography variant="h6" gutterBottom sx={{ mt: 4 }}>
              Article Settings
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <FormControl fullWidth>
                  <InputLabel id="limit">Article Limit</InputLabel>
                  <Select
                    labelId="limit"
                    value={formik.values.articleLimit}
                    label="Article Limit"
                    onChange={formik.handleChange}
                    error={formik.touched.articleLimit && Boolean(formik.errors.articleLimit)}
                    variant="standard"
                  >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>

            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Button
                  type="submit"
                  variant="contained"
                  sx={{ mt: 4, mb: 2 }}
                >
                  Save
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={6}>
            <LaunchpadPreview />
          </Grid>
        </Grid>
      </Box>
    </React.Fragment>
  );
}
