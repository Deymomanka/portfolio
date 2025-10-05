import React, { version } from 'react';
import { Box, Container, Typography } from '@mui/material';
import SkillsItems from './SkillsItems';
import skillsConfig from '../../assets/configs/skillsConfig';
import { useLang } from '../../utils/i18n';

const UI = {
  en: {
    programminglanguage: 'Programming Languages',
    ai: 'Generative AI',
    version: 'Version Control & Collaboration',
    datapreprocessing: 'Data Preprocessing',
    analysis: 'Statistical Analysis & Modeling',
    machinelearning: 'Machine Learning & Deep Learning',
    frameworks: 'Frameworks',
    databases: 'Databases',
    bitools: 'BI Tools',
    devenv: 'Development & Deployment',
    competitions: 'DS Competitions',
  },
  jp: {
    programminglanguage: 'プログラミング言語',
    ai: '生成AI',
    version: 'バージョン管理 & コラボレーション',
    datapreprocessing: 'データ前処理',
    analysis: '統計分析 & モデリング',
    machinelearning: '機械学習 & 深層学習',
    frameworks: 'フレームワーク',
    databases: 'データベース',
    bitools: 'BIツール',
    devenv: '開発・デプロイ環境',
    competitions: 'DSコンペティション',
  },
};

const Section = ({ title, children }) => (
  <Box
    sx={(theme) => ({
      textAlign: 'center',
      py: 4,
      backgroundColor: theme.palette.background.paper,
      borderRadius: 3,
      boxShadow: '0 6px 20px rgba(15,18,32,0.08), 0 1px 2px rgba(15,18,32,0.04)',
      border: `1px solid ${theme.palette.divider}`,
    })}
  >
    <Typography variant="h4" component="h1" sx={{ color: 'text.primary', py: 2, fontWeight: 900, letterSpacing: -0.4 }}>
      <strong>{title}</strong>
    </Typography>
    {children}
  </Box>
);

export default function Skills() {
  const [lang] = useLang();
  const t = UI[lang] || UI.en;

  return (
    <section id="skills">
      <Container maxWidth="md" sx={{ mb: 3 }}>
        <Section title={t.programminglanguage}>
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
            <SkillsItems config={skillsConfig.programmingLanguageSkills} />
          </Box>
        </Section>
      </Container>

      <Container maxWidth="md" sx={{ mb: 2 }}>
        <Section title={t.ai}>
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
            <SkillsItems config={skillsConfig.aiSkills} />
          </Box>
        </Section>
      </Container>

      <Container maxWidth="md" sx={{ mb: 3 }}>
        <Section title={t.version}>
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
            <SkillsItems config={skillsConfig.versionSkills} />
          </Box>
        </Section>
      </Container>

      <Container maxWidth="md" sx={{ mb: 3 }}>
        <Section title={t.datapreprocessing}>
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
            <SkillsItems config={skillsConfig.datapreprocessingSkills} />
          </Box>
        </Section>
      </Container>

      <Container maxWidth="md" sx={{ mb: 3 }}>
        <Section title={t.bitools}>
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
            <SkillsItems config={skillsConfig.bitoolsSkills} />
          </Box>
        </Section>
      </Container>

      <Container maxWidth="md" sx={{ mb: 2 }}>
        <Section title={t.analysis}>
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
            <SkillsItems config={skillsConfig.analysisSkills} />
          </Box>
        </Section>
      </Container>

      <Container maxWidth="md" sx={{ mb: 2 }}>
        <Section title={t.machinelearning}>
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
            <SkillsItems config={skillsConfig.machinelearningSkills} />
          </Box>
        </Section>
      </Container>

      <Container maxWidth="md" sx={{ mb: 3 }}>
        <Section title={t.frameworks}>
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
            <SkillsItems config={skillsConfig.frameworksSkills} />
          </Box>
        </Section>
      </Container>

      <Container maxWidth="md" sx={{ mb: 2 }}>
        <Section title={t.databases}>
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
            <SkillsItems config={skillsConfig.databasesSkills} />
          </Box>
        </Section>
      </Container>

      <Container maxWidth="md" sx={{ mb: 3 }}>
        <Section title={t.devenv}>
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
            <SkillsItems config={skillsConfig.devenvSkills} />
          </Box>
        </Section>
      </Container>

      <Container maxWidth="md" sx={{ mb: 3 }}>
        <Section title={t.competitions}>
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
            <SkillsItems config={skillsConfig.competitionsSkills} />
          </Box>
        </Section>
      </Container>




    </section>


  );
}



