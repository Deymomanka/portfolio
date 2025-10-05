import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
import Button from '@mui/material/Button'; // Material-UIのButtonコンポーネントをインポート
import contactConfig from '../assets/configs/contactConfig';
import { useLang } from '../utils/i18n'; // プロジェクトの言語設定を取得する関数



const Contact = () => {
  const [lang] = useLang();
  const t = contactConfig[lang] || contactConfig.en;

  // フォームの状態管理
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({ name: '', email: '' });

  // フォームの入力変更ハンドラー
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: '' }); // エラーをリセット
  };

  // フォーム送信ハンドラー
  const handleSubmit = (e) => {
    e.preventDefault();

    let hasError = false;
    const newErrors = { name: '', email: '' };

  // 名前のバリデーション
    if (/\d/.test(formData.name)) {
      newErrors.name = t.nameError;
      hasError = true;
    }

    // メールのバリデーション
    if (!formData.email.includes('@')) {
      newErrors.email = t.emailError;
      hasError = true;
    }

    setErrors(newErrors);

    if (!hasError) {
      // フォーム送信処理（例：API呼び出し）
      console.log('Form submitted:', formData);
    }
  };

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
            value={formData.name}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '8px' }}
          />
          {errors.name && <Typography color="error" variant="body2">{errors.name}</Typography>}
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="email" style={{ display: 'block', marginBottom: '5px' }}>{t.email}</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '8px' }}
          />
          {errors.email && <Typography color="error" variant="body2">{errors.email}</Typography>}
        </div>
                <div style={{ marginBottom: '15px' }}>
          <label htmlFor="message" style={{ display: 'block', marginBottom: '5px' }}>{t.message}</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            placeholder={t.messagePlaceholder}
            rows="9"
            style={{ width: '100%', padding: '8px' }}
          ></textarea>
        </div>
        <Button
          type="submit"
          size="medium"
          variant="contained"
          color="secondary"
          style={{ marginTop: '15px', textAlign: 'left' }}
        >
          {t.submitButton}
        </Button>
      </form>
    </Box>
  );
};

export default Contact;

