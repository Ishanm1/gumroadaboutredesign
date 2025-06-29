import { renderHook, act } from "@testing-library/react"
import { useErrorHandler } from "@/hooks/use-error-handler"
import jest from "jest" // Import jest to declare the variable

describe("useErrorHandler", () => {
  beforeEach(() => {
    jest.clearAllMocks()
    jest.spyOn(console, "error").mockImplementation(() => {})
  })

  afterEach(() => {
    jest.restoreAllMocks()
  })

  it("should initialize with no error", () => {
    const { result } = renderHook(() => useErrorHandler())

    expect(result.current.hasError).toBe(false)
    expect(result.current.error).toBe(null)
  })

  it("should capture and store errors", () => {
    const { result } = renderHook(() => useErrorHandler())
    const testError = new Error("Test error")

    act(() => {
      result.current.captureError(testError)
    })

    expect(result.current.hasError).toBe(true)
    expect(result.current.error).toBe(testError)
    expect(console.error).toHaveBeenCalledWith("Error captured:", testError)
  })

  it("should clear errors", () => {
    const { result } = renderHook(() => useErrorHandler())
    const testError = new Error("Test error")

    act(() => {
      result.current.captureError(testError)
    })

    expect(result.current.hasError).toBe(true)

    act(() => {
      result.current.clearError()
    })

    expect(result.current.hasError).toBe(false)
    expect(result.current.error).toBe(null)
  })

  it("should handle errors in withErrorHandling wrapper", async () => {
    const { result } = renderHook(() => useErrorHandler())
    const testError = new Error("Async error")

    const failingFunction = jest.fn().mockRejectedValue(testError)
    const wrappedFunction = result.current.withErrorHandling(failingFunction)

    const returnValue = await act(async () => {
      return await wrappedFunction("test-arg")
    })

    expect(returnValue).toBe(null)
    expect(result.current.hasError).toBe(true)
    expect(result.current.error).toBe(testError)
    expect(failingFunction).toHaveBeenCalledWith("test-arg")
  })
})
