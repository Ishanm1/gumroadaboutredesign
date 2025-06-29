import { render, screen, waitFor } from "@testing-library/react"
import { ResponsiveSvg } from "@/components/responsive-svg"
import jest from "jest" // Declare the jest variable

// Mock the useMediaQuery hook
jest.mock("@/hooks/use-media-query", () => ({
  useMediaQuery: jest.fn(() => false),
}))

describe("ResponsiveSvg", () => {
  const defaultProps = {
    src: "/test-image.svg",
    alt: "Test image",
    desktopWidth: 800,
    desktopHeight: 600,
  }

  beforeEach(() => {
    jest.clearAllMocks()
  })

  it("renders with correct alt text", () => {
    render(<ResponsiveSvg {...defaultProps} />)
    expect(screen.getByAltText("Test image")).toBeInTheDocument()
  })

  it("shows loading state initially", () => {
    render(<ResponsiveSvg {...defaultProps} />)
    expect(screen.getByRole("status", { hidden: true })).toBeInTheDocument()
  })

  it("handles image load error gracefully", async () => {
    // Mock image load failure
    const mockImage = {
      onload: null as any,
      onerror: null as any,
      src: "",
    }

    jest.spyOn(window, "Image").mockImplementation(() => mockImage as any)

    render(<ResponsiveSvg {...defaultProps} />)

    // Simulate error
    if (mockImage.onerror) {
      mockImage.onerror()
    }

    await waitFor(() => {
      expect(screen.getByText("Failed to load image")).toBeInTheDocument()
    })
  })

  it("applies custom className", () => {
    const { container } = render(<ResponsiveSvg {...defaultProps} className="custom-class" />)
    expect(container.firstChild).toHaveClass("custom-class")
  })

  it("uses priority prop correctly", () => {
    render(<ResponsiveSvg {...defaultProps} priority={true} />)
    const image = screen.getByAltText("Test image")
    expect(image).toHaveAttribute("fetchpriority", "high")
  })
})
