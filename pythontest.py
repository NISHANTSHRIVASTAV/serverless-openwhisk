def endpoint(params):
    num1 = params.get("num1")
    num2 = params.get("num2")
    
    sum = num2 + num1
    return {"sum": sum}