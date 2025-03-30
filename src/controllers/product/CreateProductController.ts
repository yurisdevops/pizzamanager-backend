import { Request, Response } from "express";
import { UploadedFile } from "express-fileupload";
import { v2 as cloudinary, UploadApiResponse } from "cloudinary";
import { CreateProductService } from "../../services/product/CreateProductService";

// Configurações do Cloudinary usando variáveis de ambiente para autenticação
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Função assíncrona para enviar o arquivo ao Cloudinary
async function uploadFileToCloudinary(
  file: UploadedFile
): Promise<UploadApiResponse> {
  return new Promise((resolve, reject) => {
    // Cria um stream para enviar o arquivo ao Cloudinary
    cloudinary.uploader
      .upload_stream({ folder: "products" }, (error, result) => {
        // Callback para verificar se houve erro ou sucesso
        if (error) {
          reject(error); // Rejeita a Promise em caso de erro
        } else {
          resolve(result as UploadApiResponse); // Retorna o resultado do upload
        }
      })
      .end(file.data); // Envia os dados do arquivo para o Cloudinary
  });
}

export class CreateProductController {
  async handle(req: Request, res: Response) {
    try {
      const { name, price, description, category_id } = req.body;

      const createProductService = new CreateProductService();

      // Verifica se há arquivos anexados na requisição
      if (!req.files || Object.keys(req.files).length === 0) {
        console.error("Nenhum arquivo enviado:", req.files);
        throw new Error("Erro ao enviar o arquivo");
      }

      // Obtém o arquivo enviado, verifica sua validade
      const file = req.files["file"];
      if (!file || Array.isArray(file)) {
        console.error("Arquivo mal formado ou não encontrado");
        throw new Error("Arquivo inválido");
      }

      const uploadedFile: UploadedFile = file;

      // Faz upload do arquivo ao Cloudinary e captura o resultado
      const resultFile = await uploadFileToCloudinary(uploadedFile);

      // Cria o produto com os dados fornecidos e a URL da imagem carregada
      const product = await createProductService.execute({
        name,
        price,
        description,
        category_id,
        banner: resultFile.url, // Usa a URL retornada do Cloudinary como banner do produto
      });

      res.status(201).json(product);
    } catch (error) {
      console.error("Erro ao processar requisição:", error);
      res.status(500).json({ error: "Erro interno no servidor" });
    }
  }
}
