-- Configuración de proyecto para Neovim
-- Si tienes 'vim.o.exrc = true' en tu init.lua, Neovim cargará este archivo automáticamente al abrir el proyecto.

-- 1. Integración con conform.nvim (si está instalado en tu Neovim)
local ok_conform, conform = pcall(require, 'conform')
if ok_conform then
  conform.formatters_by_ft.javascript = { 'prettier' }
  conform.formatters_by_ft.javascriptreact = { 'prettier' }
  conform.formatters_by_ft.json = { 'prettier' }
  conform.formatters_by_ft.jsonc = { 'prettier' }
  conform.formatters_by_ft.css = { 'prettier' }
  conform.formatters_by_ft.html = { 'prettier' }
  conform.formatters_by_ft.markdown = { 'prettier' }
end

-- 2. Integración con nvim-lint (si está instalado en tu Neovim)
local ok_lint, lint = pcall(require, 'lint')
if ok_lint then
  lint.linters_by_ft.javascript = { 'oxlint' }
  lint.linters_by_ft.javascriptreact = { 'oxlint' }
end
