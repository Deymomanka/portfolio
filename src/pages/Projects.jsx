import React, { useMemo, useState } from 'react';
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Chip,
  Container,
  Divider,
  Grid,
  IconButton,
  InputAdornment,
  MenuItem,
  Select,
  Stack,
  TextField,
  Tooltip,
  Typography,
} from '@mui/material';
import { Search as SearchIcon, OpenInNew as OpenInNewIcon } from '@mui/icons-material';
import projectConfig from '../assets/configs/projectConfig';
import Seo from '../components/Seo';
import { withUtm } from '../utils/withUtm';
import { useLang } from '../utils/i18n';

const UI = {
  en: {
    seoTitle: 'Projects | Rodrigo Arenas',
    seoDesc: 'Open-source libraries, systems, and real-world projects by Rodrigo Arenas.',
    overline: 'Selected Work',
    title: 'Projects',
    desc:
      'A curated collection including data analysis and predictive models, development of automation tools, and business management tools. Filter, search, and explore.',
    searchPlaceholder: 'Search projects',
    sortRecent: 'Recent',
    sortAZ: 'A → Z',
    ctaView: 'View',
  },
  jp: {
    seoTitle: 'プロジェクト | Yuliya',
    seoDesc: 'Yuliyaによるオープンソースライブラリ、システム、実世界のプロジェクト。',
    overline: '選抜作品',
    title: 'プロジェクト',
    desc:
      'データ分析や予測モデル、自動化ツールの開発や業務管理ツールの開発などを含む厳選されたコレクション。フィルタリング、検索、探索してください。',
    searchPlaceholder: 'プロジェクトを検索',
    sortRecent: '最新',
    sortAZ: 'A → Z',
    ctaView: '表示',
  },
};

const LinkButton = ({ link }) => (
  <Tooltip title={link.name} placement="top">
    <IconButton
      size="small"
      component="a"
      href={withUtm(link.url, 'projects_page')}
      target="_blank"
      rel="noopener noreferrer"
      sx={{ border: '1px solid', borderColor: 'divider', borderRadius: 2 }}
    >
      {link.icon ? (
        <Box sx={{ display: 'flex', alignItems: 'center', '& svg': { fontSize: 18 } }}>
          {link.icon}
        </Box>
      ) : (
        <OpenInNewIcon fontSize="inherit" />
      )}
    </IconButton>
  </Tooltip>
);

const ProjectCard = ({ project, lang = 'en' }) => {
  const desc = project.description_i18n?.[lang] || project.description_i18n?.en || '';
  const categoryLabel =
    typeof project.category === 'string'
      ? project.category
      : project.category?.[lang] || project.category?.en;

  return (
    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      {/* Image placeholder 16:9 to prevent layout shift */}
      <Box sx={{ position: 'relative', pt: '56.25%', overflow: 'hidden' }}>
        <CardMedia
          component="img"
          image={project.image}
          alt={project.title}
          sx={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            filter: 'saturate(1.05) contrast(1.05)',
          }}
        />
      </Box>

      <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', gap: 1 }}>
        <Stack direction="row" alignItems="center" justifyContent="space-between" spacing={1}>
          <Typography variant="h6" fontWeight={800} sx={{ letterSpacing: -0.2 }}>
            {project.title}
          </Typography>
          {categoryLabel && <Chip size="small" label={categoryLabel} />}
        </Stack>
        <Typography variant="body2" color="text.secondary">
          {desc}
        </Typography>
      </CardContent>

      <CardActions sx={{ px: 2, pb: 2, pt: 0, justifyContent: 'space-between' }}>
        <Stack direction="row" spacing={1}>
          {project.links?.map((l) => (
            <LinkButton key={l.name} link={l} />
          ))}
        </Stack>
        <Button
          size="small"
          variant="contained"
          color="secondary"
          href={withUtm(project.links?.[0]?.url || '#', 'projects_page')}
          target="_blank"
          rel="noopener noreferrer"
        >
          {UI[lang].ctaView}
        </Button>
      </CardActions>
    </Card>
  );
};

export default function Projects() {
  const [category, setCategory] = useState('All');
  const [query, setQuery] = useState('');
  const [sort, setSort] = useState('recent');
  const [lang] = useLang();
  const t = UI[lang];

  const projects = useMemo(() => {
    const filtered = projectConfig.filter((p) => {
      if (category === 'All') return true;
      const label =
        typeof p.category === 'string' ? p.category : p.category?.[lang] || p.category?.en;
      return label === category;
    });

    const q = query.trim().toLowerCase();
    const searched = q
      ? filtered.filter(
          (p) =>
            (p.title || '').toLowerCase().includes(q) ||
            (p.description_i18n?.en || '').toLowerCase().includes(q) ||
            (p.description_i18n?.es || '').toLowerCase().includes(q)
        )
      : filtered;

    return [...searched].sort((a, b) => {
      if (sort === 'az') return (a.title || '').localeCompare(b.title || '');
      return 0; // 'recent' keeps config order
    });
  }, [category, query, sort, lang]);

  const categoryChips = useMemo(() => {
    const labels = new Set(['All']); // keep sentinel value; display text stays as-is
    projectConfig.forEach((p) => {
      if (p.category) {
        const label =
          typeof p.category === 'string' ? p.category : p.category?.[lang] || p.category?.en;
        labels.add(label);
      }
    });
    return Array.from(labels);
  }, [lang]);

  return (
    <>
      <Seo title={t.seoTitle} description={t.seoDesc} />

      {/* Header */}
      <Box
        sx={{
          background: (th) =>
            `linear-gradient(180deg, ${th.palette.background.default} 0%, #ffffff 100%)`,
          borderBottom: '1px solid',
          borderColor: 'divider',
          py: { xs: 5, md: 8 },
        }}
      >
        <Container maxWidth="lg">
          <Stack spacing={2}>
            <Typography variant="overline" color="secondary.main" fontWeight={800}>
              {t.overline}
            </Typography>
            <Typography variant="h2" sx={{ fontWeight: 900, letterSpacing: -0.8 }}>
              {t.title}
            </Typography>
            <Typography color="text.secondary" maxWidth={720}>
              {t.desc}
            </Typography>

            <Stack
              direction={{ xs: 'column', md: 'row' }}
              spacing={2}
              alignItems={{ xs: 'stretch', md: 'center' }}
            >
              {/* Category chips */}
              <Stack direction="row" spacing={1} flexWrap="wrap">
                {categoryChips.map((c) => (
                  <Chip
                    key={c}
                    label={c}
                    color={c === category ? 'secondary' : 'default'}
                    variant={c === category ? 'filled' : 'outlined'}
                    onClick={() => setCategory(c)}
                    sx={{ borderRadius: 10 }}
                  />
                ))}
              </Stack>

              <Box sx={{ flexGrow: 1 }} />

              {/* Search + sort */}
              <Stack direction="row" spacing={1} alignItems="center">
                <TextField
                  size="small"
                  placeholder={t.searchPlaceholder}
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <SearchIcon fontSize="small" />
                      </InputAdornment>
                    ),
                  }}
                />
                <Divider flexItem orientation="vertical" />
                <Select size="small" value={sort} onChange={(e) => setSort(e.target.value)}>
                  <MenuItem value="recent">{t.sortRecent}</MenuItem>
                  <MenuItem value="az">{t.sortAZ}</MenuItem>
                </Select>
              </Stack>
            </Stack>
          </Stack>
        </Container>
      </Box>

      {/* Grid */}
      <Container maxWidth="lg" sx={{ py: { xs: 4, md: 6 } }}>
        <Grid container spacing={3}>
          {projects.map((p) => (
            <Grid key={p.id} item xs={12} sm={6} md={4}>
              <ProjectCard project={p} lang={lang} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}



