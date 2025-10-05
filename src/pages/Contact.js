import React from 'react';
import { Box, Typography } from '@mui/material';
import Button from '@mui/material/Button'; // Material-UIのButtonコンポーネントをインポート
import { useForm, ValidationError } from '@formspree/react';
import contactConfig from '../assets/configs/contactConfig';
import { useLang } from '../utils/i18n'; // プロジェクトの言語設定を取得する関数



const Contact = () => {
  const [lang] = useLang();
  const t = contactConfig[lang] || contactConfig.en;

  // FormspreeのuseFormフックを使用
  const [state, handleSubmit] = useForm("mjkaoobw");

  // 成功時のメッセージ表示
  if (state.succeeded) {
    return (
      <Box
        sx={(theme) => ({
          py: 4,
          backgroundColor: theme.palette.background.paper,
          borderRadius: 3,
          boxShadow: '0 6px 20px rgba(15,18,32,0.08), 0 1px 2px rgba(15,18,32,0.04)',
          border: `1px solid ${theme.palette.divider}`,
          maxWidth: '800px',
          margin: '0 auto',
          px: 14,
          textAlign: 'center',
        })}
      >
        <Typography variant="h4" component="h1" sx={{ color: 'text.primary', py: 2, fontWeight: 900, letterSpacing: -0.4 }}>
          <strong>{t.title}</strong>
        </Typography>
        <Typography variant="h6" sx={{ color: 'success.main', py: 2 }}>
          {t.successMessage}
        </Typography>
      </Box>
    );
  }

  return (
    <Box
      sx={(theme) => ({
        // textAlign: 'center',
        py: 4,
        backgroundColor: theme.palette.background.paper,
        borderRadius: 3,
        boxShadow: '0 6px 20px rgba(15,18,32,0.08), 0 1px 2px rgba(15,18,32,0.04)',
        border: `1px solid ${theme.palette.divider}`,
        maxWidth: '800px',
        margin: '0 auto',
        px: 14,
      })}
    >
      {/* タイトル */}
      <Typography variant="h4" component="h1" sx={{ color: 'text.primary', py: 2, fontWeight: 900, letterSpacing: -0.4 }}>
        <strong>{t.title}</strong>
      </Typography>

      {/* フォーム */}
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="name" style={{ display: 'block', marginBottom: '5px' }}>{t.name}</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            style={{ width: '100%', padding: '8px' }}
          />
          <ValidationError 
            prefix="Name" 
            field="name"
            errors={state.errors}
          />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="email" style={{ display: 'block', marginBottom: '5px' }}>{t.email}</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            style={{ width: '100%', padding: '8px' }}
          />
          <ValidationError 
            prefix="Email" 
            field="email"
            errors={state.errors}
          />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="message" style={{ display: 'block', marginBottom: '5px' }}>{t.message}</label>
          <textarea
            id="message"
            name="message"
            required
            placeholder={t.messagePlaceholder}
            rows="9"
            style={{ width: '100%', padding: '8px' }}
          ></textarea>
          <ValidationError 
            prefix="Message" 
            field="message"
            errors={state.errors}
          />
        </div>
        <Button
          type="submit"
          disabled={state.submitting}
          size="medium"
          variant="contained"
          color="secondary"
          style={{ marginTop: '15px', textAlign: 'left' }}
        >
          {state.submitting ? '送信中...' : t.submitButton}
        </Button>
      </form>
    </Box>
  );
};

export default Contact;

