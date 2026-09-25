// controllers/authController.go
package controllers

import (
	"github.com/gofiber/fiber/v2"
	"multicatalogo-backend/models"
)

// Login es la función controladora que se ejecutará cuando el cliente envíe sus credenciales.
func Login(c *fiber.Ctx) error {
	// Creamos una variable 'req' del tipo LoginRequest para almacenar los datos.
	var req models.LoginRequest

	// Intentamos parsear (transformar) el cuerpo JSON entrante.
	if err := c.BodyParser(&req); err != nil {
		// Si ocurre un error al parsear, retornamos un estado HTTP 400.
		return c.Status(400).JSON(fiber.Map{"error": "Cuerpo de petición inválido"})
	}

	// Evaluamos si el email y la contraseña coinciden con las credenciales predefinidas.
	// NUEVO en Paso 1: distinguimos dos roles: admin y cliente.
	switch {
	case req.Email == "admin@upse.edu.ec" && req.Password == "123456":
		// Si es el administrador, retornamos token ficticio, correo y rol admin.
		return c.JSON(fiber.Map{"token": "fake-jwt-token-123", "email": req.Email, "rol": "admin"})
	case req.Email == "cliente@upse.edu.ec" && req.Password == "123456":
		// Si es un cliente registrado, retornamos token ficticio, correo y rol cliente.
		return c.JSON(fiber.Map{"token": "fake-jwt-token-456", "email": req.Email, "rol": "cliente"})
	default:
		// Si las credenciales son incorrectas, retornamos un estado HTTP 401.
		return c.Status(401).JSON(fiber.Map{"error": "Credenciales incorrectas"})
	}
}